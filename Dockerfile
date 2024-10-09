# Menggunakan image PHP dengan Nginx
FROM php:8.1-fpm

# Instal dependensi yang diperlukan
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Menyalin file proyek ke dalam container
COPY . /var/www

# Set working directory
WORKDIR /var/www

# Instal Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instal dependensi Laravel
RUN composer install

# Ekspos port 9000
EXPOSE 9000

# Jalankan PHP-FPM
CMD ["php-fpm"]

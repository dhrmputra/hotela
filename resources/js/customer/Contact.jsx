import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react"

export default function Contact() {

    const [phone, setPhone] = useState("")

const handlePhoneChange = (value, country) => {
    let phoneNumber = value.replace(/\D/g, "") 

    const dialCode = country.dialCode

    if (phoneNumber.startsWith(dialCode)) {
        let restNumber = phoneNumber.slice(dialCode.length)

        if (restNumber.startsWith("0")) {
            restNumber = restNumber.substring(1)
        }

        phoneNumber = dialCode + restNumber
    } else {
        if (phoneNumber.startsWith("0")) {
            phoneNumber = dialCode + phoneNumber.substring(1)
        } else {
            phoneNumber = dialCode + phoneNumber
        }
    }

    setPhone("+" + phoneNumber)
}

    return (
        <section className="pt-28 px-[5%] md:px-[10%] m-auto h-auto">

            {/* Breadcrumb */}
            <span className="flex items-center text-lg">
                <h1 className="text-amber-600 font-semibold">Home</h1>
                <i className="ri-arrow-right-double-line mt-1 px-1"></i>
                Contact
            </span>

            {/* Title */}
            <h1 className="md:text-5xl text-3xl font-semibold text-center mb-12 mt-10">
                Contact Us
            </h1>

            {/* MAIN GRID */}
            <div className="grid md:grid-cols-2 gap-10">

                {/* FORM */}
                <div className="order-1">
                    <form
                        action="https://formsubmit.co/dharma.putra2003@gmail.com"
                        method="POST"
                        className="text-white bg-neutral-800 p-6 md:p-10 rounded-xl w-full shadow-md"
                        autoComplete="off"
                    >
                        <div className="flex flex-col gap-5">
                            <div>
                                <label className="font-semibold">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Masukan Nama"
                                    className="mt-1 border border-amber-600 p-2 rounded-md w-full text-zinc-600 dark:text-zinc-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Masukan Email"
                                    className="mt-1 border border-amber-600 p-2 rounded-md w-full text-zinc-600 dark:text-zinc-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold">No Telepon</label>
                                
                                <PhoneInput
                                    country={'id'}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    inputClass="!w-full !py-2 !pl-14 !border !border-amber-600 !rounded-md !text-white !bg-zinc-800"
                                    enableSearch={true}
                                    searchPlaceholder="Cari negara..."
                                    buttonClass="!border !border-amber-600 !bg-zinc-800"
                                    containerClass="mt-1 !text-black hover:!bg-zinc-800"
                                />

                                {/* hidden input supaya tetap terkirim ke formsubmit */}
                                <input type="hidden" name="number" value={phone} />
                            </div>

                            <div>
                                <label className="font-semibold">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Masukan Subject"
                                    className="mt-1 border border-amber-600 p-2 rounded-md w-full text-zinc-600 dark:text-zinc-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Pesan</label>
                                <textarea
                                    name="pesan"
                                    placeholder="Pesan"
                                    rows="5"
                                    className="mt-1 border border-amber-600 p-2 rounded-md w-full text-zinc-600 dark:text-zinc-200"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-amber-600 p-3 rounded-lg w-full hover:bg-amber-700 text-white transition"
                            >
                                Kirim Pesan
                            </button>

                        </div>
                    </form>
                </div>

                {/* INFO */}
                <div className="order-2">
                    <h2 className="text-3xl font-semibold mb-2">
                        Get In Touch
                    </h2>

                    <div className="w-42 h-1 bg-amber-600 mb-4"></div>

                    <p className="text-gray-600 mb-6">
                        Hubungi kami untuk reservasi atau informasi lebih lanjut mengenai villa kami.
                        Tim kami siap membantu Anda mendapatkan pengalaman terbaik di Bali.
                    </p>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <i className="ri-map-pin-fill text-amber-600 text-xl"></i>
                            <p>Jl. Danau Tamblingan, Sanur, Bali</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-phone-fill text-amber-600 text-xl"></i>
                            <p>+62 888-09992055</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-mail-fill text-amber-600 text-xl"></i>
                            <p>bookings@starvillasbali.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-global-fill text-amber-600 text-xl"></i>
                            <p>kejoravillas-suites.com</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0555940828885!2d115.26040657382161!3d-8.686263488461815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241cec8feddab%3A0x379e220ae1711db6!2sKejora%20Villas!5e0!3m2!1sid!2sid!4v1774265455082!5m2!1sid!2sid" width="100%" height="340" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Map" className="rounded-lg"></iframe>
                    </div>
                </div>

            </div>

        </section>
    )
}
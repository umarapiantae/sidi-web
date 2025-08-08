"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Cara mencari dan memilih layanan?",
    answer:
      "Gunakan menu pencarian atau telusuri kategori yang tersedia. Klik pada layanan untuk melihat detailnya, termasuk harga, deskripsi, dan manfaat.",
  },
  {
    question: "Proses pembelian?",
    answer:
      "Pilih layanan yang diinginkan, tambahkan ke keranjang (jika tersedia), lalu ikuti langkah-langkah checkout hingga selesai.",
  },
  {
    question: "Daftar metode pembayaran yang tersedia?",
    answer:
      "Kami mendukung berbagai metode pembayaran seperti transfer bank, e-wallet (OVO, GoPay, DANA), kartu kredit/debit, dan pembayaran melalui gerai retail mitra.",
  },
  {
    question: "Cara melakukan pembayaran?",
    answer:
      "Setelah memilih metode pembayaran, ikuti petunjuk yang muncul di layar. Untuk transfer bank, gunakan nomor rekening yang diberikan dan pastikan jumlah sesuai.",
  },
  {
    question: "Konfirmasi pembayaran?",
    answer:
      "Sistem kami akan mengonfirmasi otomatis dalam beberapa menit. Jika belum terkonfirmasi setelah 1 jam, hubungi tim dukungan dengan bukti pembayaran.",
  },
  {
    question: "Apakah saya bisa mengakses SiDi di HP?",
    answer:
      "Ya, SiDi dapat diakses melalui browser di smartphone Anda. Tampilan sudah dioptimalkan untuk perangkat mobile.",
  },
  {
    question: "Bagaimana cara meminta fitur baru?",
    answer:
      "Kirimkan masukan Anda melalui menu Hubungi Kami atau email resmi. Tim kami akan mempertimbangkan dan memberikan tanggapan.",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Ya, kami menggunakan enkripsi SSL dan protokol keamanan lainnya untuk melindungi data Anda dari akses yang tidak sah.",
  },
  {
    question: "Bagaimana cara membatalkan pesanan?",
    answer:
      "Hubungi tim dukungan segera setelah melakukan pembelian. Pembatalan hanya bisa dilakukan jika layanan belum diproses.",
  },
];

export const ColorConfiguration = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h3 className="text-xl font-semibold mt-8 text-black">
        Pertanyaan yang Sering Diajukan (FAQ)
      </h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-3">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-black">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-gray-500" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

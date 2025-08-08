import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";

export const PackageStructure = () => {
  return (
    <div id="kebijakan-privasi" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-black">
        Kebijakan Privasi
      </h3>
      <div className="rounded-md p-6 pt-3 border border-dark_border border-opacity-60 mt-6 text-gray-800 space-y-3 leading-normal">
        <p>
          <strong>Terakhir diperbarui:</strong> 8 Agustus 2025
        </p>

        <section>
          <h4 className="font-semibold text-lg mb-1">1. Pendahuluan</h4>
          <p>
            Kebijakan Privasi ini menjelaskan bagaimana{" "}
            <strong>SiDi | Sistem Digitalisasi</strong> (“kami”, “kita”, atau
            “milik kami”) mengumpulkan, menggunakan, dan melindungi informasi
            pribadi pengguna yang mengakses dan menggunakan layanan kami,
            termasuk situs web, aplikasi web, serta produk digital yang kami
            sediakan. Dengan menggunakan layanan kami, Anda menyetujui
            pengumpulan dan penggunaan informasi sesuai dengan Kebijakan
            Privasi ini.
          </p>
       <br/>
          <h4 className="font-semibold text-lg mb-1">2. Informasi yang Kami Kumpulkan</h4>
          <ul className="list-disc pl-6 space-y-0.5">
            <li>
              <strong>Informasi Pribadi:</strong> Nama, alamat email, nomor
              telepon, dan data lain yang Anda berikan secara langsung saat
              melakukan pembelian, mengisi formulir, atau menghubungi kami.
            </li>
            <li>
              <strong>Data Teknis:</strong> Alamat IP, jenis perangkat, jenis
              browser, sistem operasi, serta data aktivitas penggunaan layanan
              kami.
            </li>
            <li>
              <strong>Data Pembayaran:</strong> Informasi transaksi yang
              diproses melalui penyedia pembayaran pihak ketiga (kami tidak
              menyimpan detail kartu pembayaran Anda).
            </li>
          </ul>
        <br/>
          <h4 className="font-semibold text-lg mb-1">3. Penggunaan Informasi</h4>
          <ul className="list-disc pl-6 space-y-0.5">
            <li>Memproses pesanan dan pengiriman produk digital.</li>
            <li>Memberikan dukungan dan layanan pelanggan.</li>
            <li>
              Mengirimkan pembaruan, penawaran, atau informasi terkait produk
              (jika Anda berlangganan).
            </li>
            <li>
              Meningkatkan kualitas layanan dan pengalaman pengguna.
            </li>
          </ul>
        <br/>
          <h4 className="font-semibold text-lg mb-1">4. Perlindungan Data</h4>
          <p>
            Kami berkomitmen untuk menjaga keamanan data pribadi Anda dan
            menerapkan langkah-langkah teknis serta prosedural yang wajar untuk
            mencegah akses, penggunaan, atau pengungkapan yang tidak sah.
          </p>
        <br/>
          <h4 className="font-semibold text-lg mb-1">5. Berbagi Informasi kepada Pihak Ketiga</h4>
          <p>
            Kami <strong>tidak</strong> menjual atau menyewakan informasi pribadi
            Anda kepada pihak ketiga. Namun, kami dapat membagikan data dengan:
          </p>
          <ul className="list-disc pl-6 space-y-0.5">
            <li>
              <strong>Penyedia layanan pihak ketiga</strong> untuk keperluan
              hosting, pemrosesan pembayaran, dan distribusi produk.
            </li>
            <li>
              <strong>Kewajiban hukum</strong> jika diminta oleh peraturan
              perundang-undangan.
            </li>
          </ul>
        <br/>
          <h4 className="font-semibold text-lg mb-1">6. Cookies dan Teknologi Pelacakan</h4>
          <p>
            Situs dan aplikasi kami dapat menggunakan cookies atau teknologi
            serupa untuk meningkatkan pengalaman pengguna, analisis trafik, dan
            penyimpanan preferensi. Anda dapat menonaktifkan cookies melalui
            pengaturan browser, namun beberapa fitur mungkin tidak berfungsi
            optimal.
          </p>
        <br/>
          <h4 className="font-semibold text-lg mb-1">7. Hak Anda</h4>
          <ul className="list-disc pl-6 space-y-0.5">
            <li>Mengakses dan memperoleh salinan data pribadi Anda.</li>
            <li>
              Memperbarui atau memperbaiki informasi pribadi yang tidak akurat.
            </li>
            <li>
              Meminta penghapusan data pribadi Anda, kecuali jika kami
              diwajibkan menyimpannya untuk kepentingan hukum atau transaksi.
            </li>
          </ul>
        <br/>
          <h4 className="font-semibold text-lg mb-1">8. Perubahan Kebijakan</h4>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Perubahan akan diberlakukan segera setelah dipublikasikan di situs
            web atau aplikasi kami dengan tanggal pembaruan yang diperbarui.
          </p>
        <br/>
          <h4 className="font-semibold text-lg mb-1">9. Kontak Kami</h4>
          <p>
            Jika Anda memiliki pertanyaan atau permintaan terkait Kebijakan
            Privasi ini, hubungi kami di:
          </p>
          <ul className="list-disc pl-6 space-y-0.5">
            <li>Email: support@sidi.my.id</li>
            <li>
              Chat:{" "}
              <a
                href="https://sidi.my.id/contact"
                className="text-blue-600 underline"
              >
                https://sidi.my.id/chat
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

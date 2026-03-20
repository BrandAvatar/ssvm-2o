import Guru_award from "@/components/ai-consulting/inspirational_guru_award";


export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/assets/images/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/assets/images/favicon.png',
    },
  ],
  title: "SSVM Institutions | Coming Soon - 2026",
};

export default function page() {
  return (
    <>
      <a href="#" className="header__main text-center text-decoration-none w-100  d-block" style={{ margin: "10px auto" }}>
        <img src="/assets/images/newlogo.png" alt="SSVM Logo" className="img-fluid" />
      </a>
      <Guru_award />
      <div className="copy-right text-center p-1  rounded-3 d-block" style={{ backgroundColor: "#a3a3a3 !important" }}>
        <p className="text-black">Copyright © 2025 SSVM Group of Institutions. All rights reserved.</p>
      </div>

    </>

  )
}
import StudentpreneurAward from "@/components/ai-consulting/studentpreneur-award";


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
    title: "SSVM Institutions | Transforming India Conclave 2025 – Humanity and AI co creating Our World Today",
  };
  
export default function StudentpreneurAwardPage() {
  return (
    <div>
      <StudentpreneurAward />
    </div>
  );
}

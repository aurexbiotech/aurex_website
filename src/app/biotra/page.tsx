import FullPage from '@/components/FullPage'
import FixedSideBar from '@/components/FixedSideBar'
import { 
  HeroSection,
  CompanyOverviewSection,
  ProductsSection,
  TurnkeyProjectsSection,
  FooterSection 
} from '@/components/Sections'

export const metadata = {
  title: 'BIOTRA Diagnostic Systems | AUREX',
  description: 'Explore the BIOTRA clinical biochemistry and automated laboratory diagnostic series from AUREX.',
}

export default function BiotraPage() {
  const sections = [
    { id: 'hero', name: 'Hero', component: HeroSection },
    { id: 'company', name: 'Company', component: CompanyOverviewSection },
    { id: 'products', name: 'Products', component: ProductsSection },
    { id: 'turnkey', name: 'Turnkey Projects', component: TurnkeyProjectsSection },
    { id: 'footer', name: 'Contact', component: FooterSection },
  ];

  return (
    <main className="relative">
      {/* Fixed Vertical Side Bar - Professional Contact & Social Tools */}
      <FixedSideBar />

      {/* FullPage Component with BIOTRA Diagnostic Series */}
      <FullPage 
        sections={sections}
        transitionType="fade"
        transitionDuration={0.8}
        enableKeyboard={true}
        enableWheel={true}
      />
    </main>
  );
}

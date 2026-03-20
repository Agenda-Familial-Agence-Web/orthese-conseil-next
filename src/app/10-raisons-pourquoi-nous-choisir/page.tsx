import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import CTABanner from '@/components/CTABanner';
import styles from '@/styles/inner.module.css';

export const metadata: Metadata = { title: '10 raisons pourquoi nous choisir' };

const reasons = [
  { num: 1, title: "Service d'expérience", text: "Éric Drasse possède plus de 25 ans d'expérience dans le domaine de l'orthèse. Il a formé toute une génération d'orthésistes au Québec. De son côté, Marie Lefebvre possède plus de 15 ans d'expérience. Elle aime mettre à profit ses connaissances des nouvelles technologies." },
  { num: 2, title: "Service plus humain", text: "Les orthésistes Éric Drasse et Marie Lefebvre sont des personnes très joviales, dynamiques et agréables à côtoyer. Vous aurez la chance de rencontrer des personnes passionnées qui sauront vous mettre en confiance, vous rassurer, vous écouter et surtout, répondre à vos besoins." },
  { num: 3, title: "Orthésistes certifiés", text: "Nos orthésistes sont membres de l'AOPQ, du CCCOP et de l'OTPQ. Ils suivent un programme rigoureux de formation continue afin de parfaire leurs connaissances." },
  { num: 4, title: "Fabrication sur place", text: "Les orthèses sont fabriquées sur place, à la clinique. Vous avez l'assurance d'un produit de qualité, respectant de façon exacte l'évaluation des besoins effectuée par l'orthésiste. Réduction des coûts, rapidité de livraison et ajustements sur place." },
  { num: 5, title: "Suivi attentionné", text: "Le suivi de chaque patient est toujours effectué par le même orthésiste assigné. Chez Orthèse Conseil, vous n'êtes pas un numéro et nous prendrons toujours tout le temps nécessaire." },
  { num: 6, title: "Vaste choix", text: "Nous vous offrons un vaste choix de matériaux d'absorption, de corrections et de couleurs !" },
  { num: 7, title: "Orthèses adaptées", text: "Nos orthèses sont adaptées pour vos sports, votre travail et vos loisirs." },
  { num: 8, title: "Heures d'ouverture élargies", text: "Notre clinique est ouverte certains soirs de semaine et même le samedi ! Si votre horaire ne permet pas de venir durant les jours de semaine, nous offrons des alternatives, sur rendez-vous." },
  { num: 9, title: "Pour toute la famille", text: "Nos services sont offerts à toute la famille, à partir de zéro jusqu'à 107 ans !" },
  { num: 10, title: "Reconnus par les assurances", text: "Nous sommes reconnus par la RAMQ, la SAAQ, la CNESST et le MSSS. Nous sommes également reconnus par les assureurs privés." },
];

export default function DixRaisonsPage() {
  return (
    <>
      <HeroBanner
        title="10 raisons pourquoi nous choisir"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: '10 raisons pourquoi nous choisir' }]}
      />
      <section className={styles.pageContent}>
        <div className="container">
          <div className={styles.reasonsList}>
            {reasons.map((reason) => (
              <div key={reason.num} className={styles.reasonItem}>
                <span className={styles.reasonNumber}>{String(reason.num).padStart(2, '0')}</span>
                <div className={styles.reasonContent}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

import Card from "@/components/Card/Card"

export default function HomePage() {
  return (
    <div className='mt-96 px-3 py-5'>
      <section className="mt-10 flex items-start justify-start flex-wrap flex-col gap-5 lg:grid lg:grid-cols-2">
        <article>
          <h1 className="text-4xl font-cooper uppercase">Le shiatsu</h1>
          <p>Recevoir régulièrement du Shiatsu procure des sensations de voyage intérieur, de reconnexion à soi
            et vient harmoniser le corps et l’esprit.</p>
        </article>
        <article>
          <h1 className="text-4xl font-cooper uppercase">Un mode de vie</h1>
          <p>Un mode de vie pour être à l’écoute de sa petite voix intérieure et pour ne plus s’oublier !
            Certains paramètres dans notre vie quotidienne comme le stress, la sédentarité, un deuil, un choc
            émotionnel, un manque de sommeil, une mauvaise hygiène alimentaire ou bien encore de
            mauvaises postures..( listes non exhaustives)  génèrent des tensions corporelles</p>
        </article>
      </section>
      <section className="mt-10">
        <h1 className="text-4xl font-cooper uppercase text-center">
          Tarifs
        </h1>
        <div className="mt-5 gap-5 flex items-center justify-start flex-wrap flex-col lg:grid lg:grid-cols-2 lg:justify-items-center">
          <Card
            title="Massage sur Futon"
          />
          <Card
            title="Massage sur chaise"
          />

        </div>
        <div className="mt-5 gap-5 flex items-center justify-start flex-wrap flex-col lg:grid lg:grid-cols-3 lg:justify-items-center">
          <Card
            title="Forfait 3 scéances"
          />
          <Card
            title="Forfait 5 sceances"
          />
          <Card
            title="Forfait entreprise"
          />
        </div>
      </section>
    </div>
  )
}

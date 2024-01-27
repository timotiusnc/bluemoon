import Image from 'next/image'
import { Header } from '@/components/Header'
import bgHero from '@/images/pages/lab/hero.jpeg'
import ring1 from '@/images/pages/lab/fig4.jpeg'
import ring2 from '@/images/pages/lab/fig5.jpeg'
import ring3 from '@/images/pages/lab/fig6.jpeg'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introducing Lab Grown Diamonds',
}

export default function LabGrown() {
  return (
    <>
      <Header />
      <main className="">
        <div className="relative min-h-[300px] pb-10 text-center lg:min-h-[400px]">
          <Image
            src={bgHero}
            alt=""
            className="absolute h-full w-full object-cover"
            style={{ objectPosition: '100% 75%' }}
            priority
          />
        </div>
        <Container>
          <div className="flex flex-col items-center gap-4 py-10 text-center font-display">
            <h1 className="text-4xl uppercase">
              Introducing Lab Grown Diamond
            </h1>
            <h2 className="text-xl uppercase">
              Lab Grown Diamonds forever & for everyone
            </h2>
            <p className="leading-relaxed">
              Lab-grown diamonds offer a sparkling promise that transcends time.
              <br />
              Bringing the enchantment of diamonds within reach for all who
              appreciate their timeless allure.
            </p>
            <p className="leading-relaxed">
              We take pride in being a symbol of lasting love and accessible
              luxury for everyone.
            </p>
          </div>

          <div className="flex items-center justify-around py-10 lg:flex-row">
            <div className="max-w-lg text-center font-display lg:text-left">
              <h1 className="mb-5 text-2xl font-medium uppercase lg:text-3xl">
                It dazzles,
                <br />
                down to the science
              </h1>
              <p className="leading-relaxed">
                At the heart of lab grown diamond creations, lies science and
                innovation.
              </p>
              <p className="mt-5 leading-relaxed">
                Using advanced technological processes, scientists replicate the
                conditions found deep within the Earth&apos;s crust where
                natural diamonds are born. Carbon atoms are artfully arranged in
                a crystal lattice structure, mirroring the natural formation of
                diamonds over millions of years.
              </p>
            </div>
            <Image
              src={ring1}
              alt=""
              className="hidden max-h-[400px] max-w-xl rounded-lg object-cover shadow-xl lg:block"
            />
          </div>

          <div className="flex items-center justify-around py-10">
            <Image
              src={ring2}
              alt=""
              className="hidden max-h-[400px] max-w-xl rounded-lg object-cover shadow-xl lg:block"
              style={{ objectPosition: '100% 10%' }}
            />
            <div className="max-w-lg text-center font-display lg:text-left">
              <h1 className="mb-5 text-2xl font-medium uppercase lg:text-3xl">
                Why lab groown diamonds?
              </h1>
              <p className="leading-relaxed">
                The commitment to sustainability and ethical practices.
              </p>
              <p className="mt-5 leading-relaxed">
                Our Lab Grown Diamonds are born of a conscious choice, free from
                the environmental impact and ethical concerns often associated
                with traditional diamond mining.
              </p>
            </div>
          </div>
        </Container>

        <Image
          src={ring3}
          alt="Ring on plant"
          className="max-h-[350px] object-cover"
          style={{ objectPosition: '100% 32%' }}
        />

        <Container>
          <div className="flex flex-col items-center gap-4 py-10 text-center font-display">
            <h1 className="text-4xl uppercase">
              Quality of Lab Grown Diamonds
            </h1>
            <p className="max-w-4xl leading-relaxed">
              Despite the difference in origin, lab grown diamonds share the
              same chemical, physical, and optical properties as the natural
              ones -which means they exhibit excellent quality characteristics
              such as brilliance and durability.
            </p>
            <p className="mt-5 max-w-4xl leading-relaxed">
              As a compelling alternative to natural diamonds, the choice
              between lab grown and natural diamonds ultimately depends on
              individual preferences, budget, and ethical considerations.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

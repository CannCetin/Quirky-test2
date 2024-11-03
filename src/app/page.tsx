import Image from 'next/image'
import Link from 'next/link'
import TextRotator from '../components/TextRotator';

export default function Home() {
  return (
    <>
      <section>
        <div className="padding-global">
          <div className="w-layout-blockcontainer container w-container">
            <div className="hero-wrapper">
              <div className="hero-background">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/images/banner.mp4" type="video/mp4" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              </div>
              <div className="hero-component">
                <div 
                  data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a23" 
                  style={{opacity: 0}} 
                  className="max-width-70ch"
                >
                  <div className="heading-2 text-weight-bold">
                    Web Tasarımında Modern{" "}
                    <TextRotator />
                  </div>
                </div>
              </div>
              <div 
                data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a26" 
                style={{opacity: 0}}
                className="double-button-component margin-top-button-hero"
              >
                <Link href="/pricing" className="primary-button w-inline-block">
                  <div className="relative">
                    <div className="text-size-small text-weight-bold">Get Started</div>
                  </div>
                  <div className="button-elipse"></div>
                </Link>
                <Link href="/features" className="secondary-button w-inline-block">
                  <div className="button-wrapper">
                    <div className="secondary-button-text">
                      <div className="text-weight-bold text-size-small">Learn More</div>
                    </div>
                    <div className="button-icon">
                      <div className="icon-wrapper">
                        <Image 
                          src="/images/arrow.svg" 
                          alt="Arrow" 
                          width={24} 
                          height={24}
                          className="icon" 
                        />
                        <Image 
                          src="/images/arrow.svg" 
                          alt="Arrow" 
                          width={24} 
                          height={24}
                          className="icon" 
                        />
                      </div>
                    </div>
                    <div className="button-icon absolute"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-section">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container w-container">
            <div 
              data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a30" 
              style={{opacity: 0}} 
              className="trusted-by-component"
            >
              <div className="opacity-60">
                <div className="text-size-small">Modern teknolojiler</div>
              </div>
              <div className="trusted-by-hero-logos">
                <div className="logo-wrapper">
                  <Image 
                    src="/images/dotnet-horizontal.svg" 
                    alt="Logo" 
                    width={150}
                    height={50}
                  />
                </div>
                <div className="logo-wrapper">
                  <Image 
                    src="/images/react-logo.svg" 
                    alt="Logo" 
                    width={150}
                    height={50}
                  />
                </div>
                <div className="logo-wrapper">
                  <Image 
                    src="/images/node-js-seeklogo.svg" 
                    alt="Logo" 
                    width={150}
                    height={50}
                  />
                </div>
                <div className="logo-wrapper">
                  <Image 
                    src="/images/javascript-horizontal.svg" 
                    alt="Logo" 
                    width={150}
                    height={50}
                  />
                </div>
                <div className="logo-wrapper">
                  <Image 
                    src="/images/strapi-seeklogo.svg" 
                    alt="Logo" 
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
        <section>
          <div 
            data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1391" 
            style={{opacity: 0}} 
            className="about-hero-interaction"
          >
            <div className="hero-sticky-component">
              <div 
                data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1393" 
                className="sticky-images left"
              >
                <Image
                 src="/images/hero-20image.jpg"
                  alt="Slider Image"
                  width={848}
                  height={600}
                  className="image"
                  sizes="(max-width: 479px) 100vw, 30vw"
                  quality={100}
                />
              </div>
              <div 
                data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1395" 
                className="sticky-images middle"
              >
                <div className="hero-video w-background-video w-background-video-atom">
                  <video
                    id="8cd18ab4-66b9-32d7-9eb8-771b2493adc9-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="image"
                    style={{
                      backgroundImage: 'url("/images/66d89db32b418832a387e57c-2f66d8c23fec6488becdc7f741_about-20hero-20video-poster-00001.jpg")'
                    }}
                  >
                    <source src="/images/features.mp4" type="video/mp4" />
                    <source src="/images/features.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div 
                data-w-id="16b69460-66f0-c83d-2c5f-5e56a35c1397" 
                className="sticky-images right"
              >
                <Image
                  src="/images/hero-20image-1.jpg"
                  alt="Hero Image"
                  width={848}
                  height={600}
                  className="image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
  <div className="padding-global">
    <div className="w-layout-blockcontainer container medium w-container">
      <div className="features-cards-wrapper">
        <div className="header">
          <div className="heading-4 text-weight-bold">
            Web Siteniz Kurumsal Kimliğinizi Yansıtsın
          </div>
        </div>
        
        <div className="home-integrations-wrapper">
          <div className="integrations-content-component">
            {/* İlk Blok */}
            <div 
              data-w-id="87eb6bc4-11f4-c138-41ab-f278fcfa9472" 
              style={{opacity: 0}}
              className="integrations-block first"
            >
              <div className="integrations-content">
                <div className="text-size-large">Web Uygulamaları</div>
                <div className="opacity-70">
                  <div className="max-width-50ch">
                    <div className="text-size-regular">
                      İhtiyaçlarınıza özel, ölçeklenebilir ve güvenilir web yazılımları geliştiriyoruz. 
                      Kullanıcı dostu arayüzler ve performansı yüksek çözümlerle dijital dünyada fark yaratın.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* İkinci Blok */}
            <div 
              data-w-id="87eb6bc4-11f4-c138-41ab-f278fcfa947c" 
              style={{opacity: 0}}
              className="integrations-block second"
            >
              <div className="integrations-content">
                <div className="text-size-large">Arama Motoru Optimizasyonu(Seo)</div>
                <div className="opacity-70">
                  <div className="max-width-50ch">
                    <div className="text-size-regular">
                      Web sitenizi arama motorlarında üst sıralara taşıyarak daha fazla organik ziyaretçi elde edin. 
                      SEO uzmanlarımızla kalıcı sonuçlar sağlayan stratejiler oluşturuyoruz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="integrations-content-component">
            {/* Üçüncü Blok */}
            <div 
              data-w-id="87eb6bc4-11f4-c138-41ab-f278fcfa9487" 
              style={{opacity: 0}}
              className="integrations-block second"
            >
              <div className="integrations-content">
                <div className="text-size-large">Marka Yönetimi</div>
                <div className="opacity-70">
                  <div className="max-width-50ch">
                    <div className="text-size-regular">
                      Markanızı güçlü bir şekilde konumlandırmak için stratejik marka yönetimi hizmeti sunuyoruz. 
                      Logodan kurumsal kimliğe kadar markanızı baştan sona tasarlıyoruz.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dördüncü Blok */}
            <div 
              data-w-id="87eb6bc4-11f4-c138-41ab-f278fcfa9491" 
              style={{opacity: 0}}
              className="integrations-block first"
            >
              <div className="integrations-content">
                <div className="text-size-large">Marka Yönetimi ve Marketing</div>
                <div className="opacity-70">
                  <div className="max-width-50ch">
                    <div className="text-size-regular">
                      Hedef kitlenizi doğru kanallarda etkili reklam kampanyalarıyla buluşturuyoruz. 
                      Dijital reklam yönetimi ile yatırımınızdan en iyi dönüşü almanızı sağlıyoruz.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Butonlar */}
        <div 
          data-w-id="8987cab3-f15e-de6f-2dab-834f91d30665" 
          style={{opacity: 0}}
          className="double-button-component"
        >
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="relative">
              <div className="text-size-small text-weight-bold">Get Started</div>
            </div>
            <div className="button-elipse"></div>
          </Link>
          
          <Link href="/features" className="secondary-button w-inline-block">
            <div className="button-wrapper">
              <div className="secondary-button-text">
                <div className="text-weight-bold text-size-small">Learn More</div>
              </div>
              <div className="button-icon">
                <div className="icon-wrapper">
                  <Image 
                    src="/images/arrow.svg" 
                    alt="Arrow" 
                    width={24}
                    height={24}
                    className="icon"
                  />
                  <Image 
                    src="/images/arrow.svg" 
                    alt="Arrow" 
                    width={24}
                    height={24}
                    className="icon"
                  />
                </div>
              </div>
              <div className="button-icon absolute"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Tech Cards Section */}
      <section>
  <div className="padding-global">
    <div className="w-layout-blockcontainer container w-container">
      <div className="home-features-wrapper">
        {/* Header Bölümü */}
        <div className="header">
          <div className="heading-4 text-weight-bold">
            Modern Teknolojilerle Güçlendirilmiş Çözümler
          </div>
          <div className="opacity-60">
            <div className="max-width-48ch">
              <div className="text-size-regular">
                En son teknolojileri kullanarak yüksek performanslı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyoruz.
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Birinci Kart */}
          <div 
            id="w-node-f1ebc3db-c32c-0977-63ac-12a3728dfe36-aee64be3" 
            className="features first tech-card"
          >
            <div className="text-size-large">01</div>
            <div className="features-content">
              <div className="text-weight-medium">React.js ile Dinamik UI</div>
              <div className="opacity-70">
                <div>
                  Hızlı, interaktif ve kullanıcı dostu arayüzler için React.js kullanıyoruz.
                </div>
              </div>
            </div>
          </div>

          {/* İkinci Kart */}
          <div 
            id="w-node-f1ebc3db-c32c-0977-63ac-12a3728dfe3f-aee64be3" 
            className="features second tech-card"
          >
            <div className="text-size-large">02</div>
            <div className="features-content">
              <div className="text-weight-medium">Node.js ve .NET Backend</div>
              <div className="opacity-70">
                <div>
                  Yüksek performanslı, ölçeklenebilir ve güvenli backend sistemleri geliştiriyoruz.
                </div>
              </div>
            </div>
          </div>

          {/* Üçüncü Kart */}
          <div 
            id="w-node-f1ebc3db-c32c-0977-63ac-12a3728dfe48-aee64be3" 
            className="features third tech-card"
          >
            <div className="text-size-large">03</div>
            <div className="features-content">
              <div className="text-weight-medium">Strapi CMS Entegrasyonu</div>
              <div className="opacity-70">
                <div>
                  Esnek içerik yönetimi için Strapi CMS kullanarak API-first çözümler sunuyoruz.
                </div>
              </div>
            </div>
          </div>

          {/* Dördüncü Kart */}
          <div 
            id="w-node-f1ebc3db-c32c-0977-63ac-12a3728dfe51-aee64be3" 
            className="features fourth tech-card"
          >
            <div className="text-size-large">04</div>
            <div className="features-content">
              <div className="text-weight-medium">Güvenlik ve Performans</div>
              <div className="opacity-70">
                <div>
                  En iyi güvenlik uygulamalarıyla yüksek performanslı web uygulamaları geliştiriyoruz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Blog Section */}
      <section>
  <div className="padding-global">
    <div className="w-layout-blockcontainer container w-container">
      <div className="steps-wrapper">
        {/* Header Bölümü */}
        <div className="header">
          <div className="heading-4 text-weight-medium">
            Dijital Dönüşüm İçin İleri Web Çözümleri ve SEO Stratejileri
          </div>
          <div className="opacity-60">
            <div className="max-width-42ch">
              <div>
                İşletmenizi dijital dünyada büyütmek için özel web uygulamaları ve güçlü SEO teknikleri ile başarıyı yakalayın. 
                İnovatif çözümlerle performansı ve görünürlüğü artırmanın yollarını bloglarımızda keşfedin.
              </div>
            </div>
          </div>
        </div>

        {/* Steps Stack Component */}
        <div 
          data-w-id="b063efcf-b404-c1ec-7d87-e726ec74cfb1" 
          style={{opacity: 0}}
          className="steps-stack-component"
        >
          {/* Birinci Adım */}
          <div className="steps-item">
            <div className="steps-card">
              <div className="left-content">
                <div className="steps-content">
                  <div className="max-width-30ch">
                    <div className="heading-6 text-weight-medium">LCP ve Performans Artışı</div>
                  </div>
                  <div className="steps-description">
                    <div>
                      LCP, web sitenizin yüklenme hızını etkileyen bir metriktir. LCP'yi optimize ederek kullanıcı deneyimini geliştirin.
                    </div>
                  </div>
                </div>
                <Link href="/pricing" className="primary-button w-inline-block">
                  <div className="relative">
                    <div className="text-size-small text-weight-bold">İçeriği Gör</div>
                  </div>
                  <div className="button-elipse"></div>
                </Link>
              </div>
              <div className="right-content">
                <div className="steps-image">
                  <Image
                    src="/images/stack-20images-2004.jpg"
                    alt="Stack Image"
                    width={1244}
                    height={800}
                    className="image"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 47vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* İkinci Adım */}
          <div className="steps-item">
            <div className="steps-card">
              <div className="left-content">
                <div className="steps-content">
                  <div className="max-width-40ch">
                    <div className="heading-6 text-weight-medium">SEO ve UX Dengesini Bulma</div>
                  </div>
                  <div className="steps-description">
                    <div>
                      SEO ve kullanıcı deneyimini aynı anda optimize ederek web uygulamanızın başarısını artırın.
                    </div>
                  </div>
                </div>
                <Link href="/pricing" className="primary-button w-inline-block">
                  <div className="relative">
                    <div className="text-size-small text-weight-bold">İçeriği Gör</div>
                  </div>
                  <div className="button-elipse"></div>
                </Link>
              </div>
              <div className="right-content">
                <div className="steps-image">
                  <Image
                    src="/images/stack-20images-2003.jpg"
                    alt="Stack Image"
                    width={1244}
                    height={800}
                    className="image"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 47vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Üçüncü Adım */}
          <div className="steps-item">
            <div className="steps-card">
              <div className="left-content">
                <div className="steps-content">
                  <div className="max-width-30ch">
                    <h2 className="heading-6 text-weight-medium">LCP ve Performans Artışı</h2>
                  </div>
                  <div className="steps-description">
                    <div>
                      LCP, FID ve CLS ile web sitenizin performansını ölçün ve optimize edin.
                    </div>
                  </div>
                </div>
                <Link href="/pricing" className="primary-button w-inline-block">
                  <div className="relative">
                    <div className="text-size-small text-weight-bold">İçeriği Gör</div>
                  </div>
                  <div className="button-elipse"></div>
                </Link>
              </div>
              <div className="right-content">
                <div className="steps-image">
                  <Image
                    src="/images/stack-20images-2002.jpg"
                    alt="Stack Image"
                    width={1244}
                    height={800}
                    className="image"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 47vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
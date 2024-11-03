import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
      <footer>
           <div className="padding-global">
    <div className="w-layout-blockcontainer container w-container">
      <div className="footer-component">
        {/* Logo */}
        <div data-w-id="93f4457d-ec22-3c66-b213-0b7ef6a67132" className="footer-heading">
          <Image
            src="/images/logo-quirky.png"
            alt="Quirky Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Footer Grid */}
        <div 
          data-w-id="93f4457d-ec22-3c66-b213-0b7ef6a67134" 
          className="w-layout-grid footer-grid"
        >
          {/* Keşfet */}
          <div id="w-node-_93f4457d-ec22-3c66-b213-0b7ef6a67135-f6a6712e" className="footer-grid-wrap">
            <div className="text-size-large text-weight-medium">Keşfet</div>
            <div className="footer-links-wrapper">
              <Link href="/" className="footer-link w--current">Anasayfa</Link>
              <Link href="/about" className="footer-link">Hakkımızda</Link>
              <Link href="/features" className="footer-link">Projelerimiz</Link>
            </div>
          </div>

          {/* Destek */}
          <div id="w-node-_93f4457d-ec22-3c66-b213-0b7ef6a67159-f6a6712e" className="footer-grid-wrap">
            <div className="text-size-large text-weight-medium">Destek</div>
            <Link href="/contact" className="footer-link">İletişim</Link>
            <Link href="/faq" className="footer-link">SSS</Link>
          </div>

          {/* Others */}
          <div className="footer-grid-wrap">
            <div className="text-size-large text-weight-medium">Others</div>
            <div className="footer-links-wrapper">
              <Link href="/other/style-guide" className="footer-link">StyleGuide</Link>
              <Link href="/other/changelog" className="footer-link">Changelog</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
            </div>
          </div>

          {/* Utility */}
          <div id="w-node-b91edead-1de6-1605-60a1-b4a85284b2d2-f6a6712e" className="footer-grid-wrap">
            <div className="text-size-large text-weight-medium">Utility</div>
            <Link href="https://entropy-template.webflow.io/401" className="footer-link">Password</Link>
            <Link href="/other/instruction" className="footer-link">Instruction</Link>
            <Link href="/other/license" className="footer-link">License</Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div data-w-id="93f4457d-ec22-3c66-b213-0b7ef6a6715f" className="footer-social-wrapper">
          <Link href="#" className="footer-social w-inline-block">
            <Image
              src="/images/social-20icons-2004.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
              className="icon-embed"
            />
          </Link>

          <Link href="#" className="footer-social w-inline-block">
            <Image
              src="/images/social-20icons-2003.svg"
              alt="Facebook Icon"
              width={24}
              height={24}
              className="icon-embed"
            />
          </Link>

          <Link href="#" className="footer-social w-inline-block">
            <Image
              src="/images/social-20icons-2002.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
              className="icon-embed"
            />
          </Link>

          <Link href="https://www.instagram.com/lucas.webflow/" className="footer-social w-inline-block">
            <Image
              src="/images/social-20icons-2001.svg"
              alt="Github Icon"
              width={24}
              height={24}
              className="icon-embed"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div data-w-id="93f4457d-ec22-3c66-b213-0b7ef6a67168" className="footer-links-wrapper">
          <div className="credits-wrapper">
            <p>Copyright ©</p>
            <Link href="#" target="_blank" className="credits w-inline-block">
              <p className="paragraph">
                Design &amp; Developed by <span className="text-color-white">Quirky Tech.</span>
              </p>
            </Link>
            <Link href="#" target="_blank" className="credits w-inline-block">
              <p className="paragraph">
                Powered by <span className="text-color-white">Quirky</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      </footer>
    );
  }

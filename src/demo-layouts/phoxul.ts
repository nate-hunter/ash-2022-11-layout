import "./phoxul.css";

document.querySelector<HTMLHtmlElement>("#app")!.innerHTML = `
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <link rel="stylesheet" href="style.css" />
  <title>Phoxul Website</title>
</head>
<body class="container">
  <!-- ------------------------------------------------------ Header -->
  <header class="header overall-layout">
    <a class="header__logo" href="#">Phoxul</a>

    <ul class="header__nav">
      <a class="header__nav--link" href="#">Home</a>
      <a class="header__nav--link" href="#">About</a>
      <a class="header__nav--link" href="#">Services</a>
      <a class="header__nav--link" href="#">Works</a>
      <a class="header__nav--link" href="#">Gallery</a>
      <a class="header__nav--link" href="#">Blog</a>
      <a class="header__nav--link" href="#">Contact</a>
    </ul>
  </header>

  <!-- ------------------------------------------------------ Hero -->
  <section class="hero overall-layout section__padding">
    <div class="hero__content">
      <h6 class="hero__content--mini-title">Welcome to</h6>

      <h1 class="hero__content--title">Phoxul Studio</h1>

      <p class="hero__content--para">
        I love to pause the wild, happy and real moments of life, just to hear
        their stories untold.
      </p>

      <div class="hero__content--links">
        <a class="hero__content--links__my-works" href="#">My Works</a>
        <a class="hero__content--links__contact" href="#">Contact</a>
      </div>
    </div>

    <figure class="hero__bg">
      <img loading="lazy" src="images/hero-bg.jpg" alt="Studio" />
    </figure>
  </section>

  <!-- ------------------------------------------------------ Personal Info -->
  <section class="personal-info overall-layout section__padding">
    <div class="personal-info__content">
      <h2 class="personal-info__content--title section__title">
        Hello, I'm Martin Dow, a professional photographer based in USA
      </h2>

      <p class="personal-info__content--para section__para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem reiciendis officiis quis quasi corporis possimus
        obcaecati alias esse! Animi voluptates reiciendis repudiandae
        assumenda! Ex, ab.
      </p>

      <ul class="personal-info__content--experience">
        <div>
          <i class="fa-solid fa-check"></i>
          <li class="section__para">Over 7 Years of Experience</li>
        </div>

        <div>
          <i class="fa-solid fa-check"></i>
          <li class="section__para">200+ Successfully Executed Projets</li>
        </div>

        <div>
          <i class="fa-solid fa-check"></i>
          <li class="section__para">Exceptional Work Quality</li>
        </div>
      </ul>
    </div>

    <figure class="personal-info__img">
      <img
        loading="lazy"
        src="images/personal-info-img.jpg"
        alt="Personal Image"
      />
    </figure>
  </section>

  <!-- ------------------------------------------------------ Services -->
  <section class="services overall-layout section__padding">
    <h2 class="services__title section__title">My Services</h2>

    <p class="services__para section__para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempore
      quidem reprehenderit.
      <span>
        Provident excepturi odio aspernatur cupiditate cum tempora facere!
      </span>
    </p>

    <div class="services__service-cards">
      <div class="services__service-cards--card">
        <i class="fa-solid fa-camera"></i>
        <h3>Photography</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>

      <div class="services__service-cards--card">
        <i class="fa-solid fa-video"></i>
        <h3>Videography</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>

      <div class="services__service-cards--card">
        <i class="fa-solid fa-brush"></i>
        <h3>Photo Retouching</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>

      <div class="services__service-cards--card">
        <i class="fa-solid fa-camera"></i>
        <h3>Aerial Photography</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>

      <div class="services__service-cards--card">
        <i class="fa-solid fa-lightbulb"></i>
        <h3>Lighting Setup</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>

      <div class="services__service-cards--card">
        <i class="fa-solid fa-ruler-combined"></i>
        <h3>Video Color Grading</h3>
        <p class="section__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
          debitis!
        </p>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------ News -->
  <section class="news overall-layout section__padding">
    <div class="news__info">
      <h2 class="news__info--title section__title">Latest News</h2>

      <p class="news__info--para section__para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
        velit!
      </p>
    </div>

    <article class="news__article">
      <div class="news__article--content">
        <h6 class="news__article--content__mini-title">Resources</h6>

        <h3 class="news__article--content__title">
          Cosina announces its fastest full-frame lens
        </h3>

        <p class="news__article--content__para section__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          officiis quas doloribus.
        </p>

        <div>
          <a class="news__article--content__link" href="#">Read More</a>
          <p class="news__article--content__date section__para">
            20 Oct, 2035
          </p>
        </div>
      </div>

      <figure class="news__article--img">
        <img loading="lazy" src="images/news-img.jpeg" alt="Cosina Lens" />
      </figure>
    </article>
  </section>

  <!-- ------------------------------------------------------ My Works -->
  <section class="my-works overall-layout section__padding">
    <h2 class="my-works__title section__title">My Works</h2>

    <ul class="my-works__areas">
      <li class="my-works__areas--area section__para">All</li>
      <li class="my-works__areas--area section__para">Personal</li>
      <li class="my-works__areas--area section__para">Wedding</li>
      <li class="my-works__areas--area section__para">Event</li>
      <li class="my-works__areas--area section__para">Fashion</li>
      <li class="my-works__areas--area section__para">Product</li>
    </ul>

    <!-- div.my-works__imgs>figure*9.my-works__imgs--img>img[loading="lazy"][alt="My Work"][src="images/my-works/my-work-$.jpg"] -->

    <div class="my-works__imgs">
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-1.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>

      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-2.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-3.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-4.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-5.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-6.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-7.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-8.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
      <figure class="my-works__imgs--img">
        <img
          src="images/my-works/my-work-9.jpg"
          alt="My Work"
          loading="lazy"
        />
      </figure>
    </div>
  </section>

  <!-- ------------------------------------------------------ Contact -->
  <section class="contact overall-layout parallax section__padding">
    <div class="contact__info">
      <h2 class="contact__info--title">
        Need help with professional photography? Let's work together!
      </h2>

      <a class="contact__info--link" href="#">Contact Me</a>
    </div>

    <div class="contact__testimonial">
      <p class="contact__testimonial--para section__para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
        dicta error. Eum illum amet ducimus eius ex odio animi consectetur ad
        maxime. Placeat, eum iure.
      </p>

      <div class="contact__testimonial--info">
        <figure class="contact__testimonial--info__img">
          <img
            loading="lazy"
            src="images/contact-img.jpg"
            alt="James Brown"
          />
        </figure>

        <div>
          <p class="contact__testimonial--info__name">James Brown</p>
          <p class="contact__testimonial--info__role">CEO, ColorImage</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------ Clients -->
  <section class="clients overall-layout">
    <figure class="clients__client">
      <img src="images/clients/client-1.png" alt="client" loading="lazy" />
    </figure>

    <figure class="clients__client">
      <img src="images/clients/client-2.png" alt="client" loading="lazy" />
    </figure>

    <figure class="clients__client">
      <img src="images/clients/client-3.png" alt="client" loading="lazy" />
    </figure>

    <figure class="clients__client">
      <img src="images/clients/client-4.png" alt="client" loading="lazy" />
    </figure>
  </section>

  <!-- ------------------------------------------------------ Footer -->
  <footer class="footer overall-layout section__padding">
    <div class="footer__newsletter">
      <div class="footer__newsletter--content">
        <h2 class="footer__newsletter--content__title">
          Sign up to get latest update
        </h2>

        <p class="footer__newsletter--content__para">
          Sign up for our monthly newsletter for the latest news & articles
        </p>
      </div>

      <form class="footer__newsletter--form">
        <input type="email" placeholder="Enter Your Email" />
        <input type="submit" value="Subscribe Now" />
      </form>
    </div>

    <div class="footer__author">
      <div class="footer__author--info">
        <a class="header__logo" href="#">Phoxul</a>

        <p class="footer__author--info__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          velit magnam doloribus reiciendis
        </p>
      </div>

      <div class="footer__author--quick-links">
        <h3 class="footer__author--quick-links__title">Quick Links</h3>

        <ul class="footer__author--quick-links__container">
          <li>About</li>
          <li>Services</li>
          <li>Works</li>
          <li>Blog</li>
        </ul>
      </div>

      <div class="footer__author--contact">
        <h3 class="footer__author--contact__title">Contact</h3>

        <ul class="footer__author--contact__container">
          <div>
            <i class="fa-solid fa-square-phone"></i>
            <li>+93 123 456 7890</li>
          </div>

          <div>
            <i class="fa-solid fa-envelope"></i>
            <li>el@el.cool</li>
          </div>

          <div>
            <i class="fa-solid fa-address-card"></i>
            <li>177A Bleecker Street, NYC, USA</li>
          </div>
        </ul>
      </div>
    </div>

    <div class="footer__copy-rights">
      <p>Muslim Helalee. All Rights Reserved</p>

      <div class="footer__copy-rights--social">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-dribbble"></i>
      </div>
    </div>
  </footer>
</body>
</html>
`;

export {};

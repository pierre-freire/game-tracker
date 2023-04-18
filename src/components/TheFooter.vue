<script setup></script>

<template>
  <footer class="footer">
    <img class="footer__logo" loading="lazy" src="../assets/logo.svg" />
    <p class="footer__copyright-text">
      © 2021, Game Tracker Inc. Todos os direitos reservados. Nulla facilisi.
      Etiam sagittis congue tempor. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu
      velit et ante luctus egestas. Aenean sed nisi tellus. Duis non ornare
      libero. Quisque suscipit maximus nisi, in gravida felis. Cras ornare
      mauris ac nisi congue, ut condimentum sem tincidunt. Phasellus semper
      tellus malesuada turpis gravida cursus. Duis nec eleifend nunc, vitae
      finibus elit. Aliquam eget diam vitae purus suscipit viverra.
    </p>
    <ul class="footer__navbar">
      <li class="footer__navbar-item">Termos de Serviço</li>
      <li class="footer__navbar-item">Política de Privacidade</li>
      <li class="footer__navbar-item">Trabalhe Conosco</li>
      <li class="footer__navbar-item">Contato</li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0b1641;
  padding: 0 8px;
  text-align: center;
  padding-bottom: 15px;
}

.footer__logo {
  width: 25px;
  height: 25px;
  margin-top: 22px;
}

.footer__copyright-text {
  margin: 14px 0 12px;
  font-size: 10px;
  line-height: 1.5;
}

.footer__navbar {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 15px;
}

.footer__navbar-item {
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 8px;
}

.footer__navbar-item:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 321px) {
  .footer__logo {
    width: 32px;
    height: 32px;
  }

  .footer__copyright-text {
    margin: 14px 0 12px;
    font-size: 14px;
    line-height: 1.5;
  }

  .footer__navbar {
    display: flex;
    gap: 46px;
  }
}
</style>

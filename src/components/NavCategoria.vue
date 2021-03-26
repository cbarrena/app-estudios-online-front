<template>
    <div class="categoria">
        <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Categorias:</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        
      <b-navbar-nav>
          <b-nav-item-dropdown text="Lenguajes de Programación">
          <b-dropdown-item href="#">Java</b-dropdown-item>
          <b-dropdown-item href="#">PHP</b-dropdown-item>
          <b-dropdown-item href="#">Net</b-dropdown-item>
          <b-dropdown-item href="#">C++</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Negocios">
            <b-dropdown-item href="#">Liderazgo</b-dropdown-item>
            <b-dropdown-item href="#">Finanzas</b-dropdown-item>
            <b-dropdown-item href="#">Estrategias</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>
<template>
  <header>
    <div style="padding: 4px 4px 4px 4px; text-align: center;background: #FFFFFF;font-size: 180%;">
      <router-link :to=" { name: 'Home' }">
        <a style="text-decoration:none;color: #5A5A5A">
          <img src="@/assets/RML-logo.png" width="273" height="90.5" alt="RML Logo">
          <p style="font-weight: bold">Rauchholz Memorial Library</p>
        </a>
      </router-link>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width: 100%">
      <div class="container-fluid">
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item"><a class="nav-link" aria-current="page" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="https://rauchholzlibrary.biblionix.com/catalog/" target="_blank">Online Catalog</a></li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                New Library
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li ><a class="dropdown-item" href="./files/NewLibrary_Design.pdf" target="_blank">New Library Plans</a></li>
                <li><a class="dropdown-item" href="./files/NewLibrary_DonationFlyer.pdf" target="_blank">Donation Flyer</a></li>
              </ul>
            </li>

            <li class="nav-item"><a class="nav-link" href="http://us8.campaign-archive1.com/home/?u=064c97513c8d2f233cb94ce1d&id=fb2278d67f" target="_blank">Newsletter</a></li>

            <li class="nav-item dropdown nav-right">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link :to=" { name: 'LibraryServices' }"><a class="dropdown-item">Services</a></router-link></li>
                <li><router-link :to=" { name: 'Databases' }"><a class="dropdown-item">Databases</a></router-link></li>
                <li><router-link :to=" { name: 'LibraryBoard' }"><a class="dropdown-item">Board</a></router-link></li>
                <li><router-link :to=" { name: 'History' }"><a class="dropdown-item">History</a></router-link></li>
                <li><router-link :to=" { name: 'Friends' }"><a class="dropdown-item">Friends of RML</a></router-link></li>
                <li><hr class="dropdown-divider"><b>&nbsp;Files</b></li>
                <li><a class="dropdown-item" href="./files/Library_NewPatronInfo.pdf" target="_blank">New Patron Information</a></li>
                <li><a class="dropdown-item" href="./files/Library_Policy2016.pdf" target="_blank">Library Policy</a></li>
                <li><a class="dropdown-item" href="./files/Library_AR19-20.pdf" target="_blank">Annual Report</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown nav-left">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Community
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link :to=" { name: 'LocalFacilities' }"><a class="dropdown-item">Facilities</a></router-link></li>
                <li><router-link :to=" { name: 'LocalServices' }"><a class="dropdown-item">Services</a></router-link></li>
              </ul>
            </li>

            <li class="nav-item"><router-link :to=" { name: 'ContactUs' }"><a class="nav-link">Contact Us</a></router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>

export default {
  name: 'Header.vue',
  components: {
  }
}
</script>

<style scoped>
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

</style>

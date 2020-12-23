<template>
  <footer class="container-fluid">
    <div class="row">

      <!--  Contact Us Details   -->
      <div class="col-sm-4 text-center">
        <router-link :to=" { name: 'ContactUs' }"><h2>Contact Us</h2></router-link>
        <p>1140 N. Hemlock Rd</p>
        <p>Phone: <a href="tel:+1-989-642-8621">(989) 642-8621</a></p>
        <p>Fax: <a href="fax:+1-989-642-5559">(989) 642-5559</a></p>
        <p>Email: <a href="mailto:library@rauchholzlibrary.org">library@rauchholzlibrary.org</a></p>
      </div>

      <!--   Newsletter Sign Up   -->
      <div class="col-sm-4 text-center">
        <h2>Newsletter Sign Up</h2>
        <div class="form-inline">
          <input type="email" class="form-control" placeholder="email address">
          <br>
          <br>
          <a href="http://rauchholzlibrary.us8.list-manage.com/subscribe/post?u=064c97513c8d2f233cb94ce1d&id=fb2278d67f"
             target="_blank">
            <button type="submit" class="btn btn-danger">Submit</button>
          </a>
        </div>
      </div>

    <!--   Hours   -->
      <div class="col-sm-4 text-center">
        <h2>Hours</h2>
        <p>Sunday: Closed</p>
        <p>Monday: 9a - 5p</p>
        <p>Tuesday: 9a - 5p</p>
        <p>Wednesday: 1p - 8p</p>
        <p>Thursday: 1p - 8p</p>
        <p>Friday: 9a - 5p</p>
        <p>Saturday <i>(Sept. - May)</i> : 9a - 1p</p>
      </div>

    </div> <!-- End of Row -->

    <p>&copy; 2020 RML &middot; <a href="../files/Library_Policy2016.pdf" target="_blank">Policy</a></p>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  margin-top: 3em;
  padding-top: 1.5em;
  background-color: #f2f2f2;
}

footer p {
  margin: .4em;
}

</style>

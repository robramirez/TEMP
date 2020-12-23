<template>
  <div class="container">
    <div class="row">
    <div class="col-2">
      <ul class="nav flex-column btn-group" role="group">
        <button type="button" class="btn-primary"><a class="nav-link" href="https://www.facebook.com/Rauchholz-Memorial-Library-171670279560867/?fref=ts" target="_blank">Facebook</a></button>
        <button type="button" class="btn-primary"><a class="nav-link" href="https://www.instagram.com/rauchholzlibrary/" target="_blank">Instagram</a></button>
        <button type="button" class="btn-primary"><a class="nav-link" href="https://twitter.com/rauchholz_lib" target="_blank">Twitter</a></button>
        <button type="button" class="btn-primary"><a class="nav-link" href="https://www.youtube.com/channel/UCEzvTe3ER2JMAx7hka8IVkg" target="_blank">Youtube</a></button>
        <button type="button" class="btn-primary"><a class="nav-link" href="mailto:library@rauchholzlibrary.org">Email</a></button>
      </ul>
    </div>

      <div class="col-10 text-start">
        <h1>Contact Us</h1>
        <p><i class="fas fa-location-arrow" aria-hidden="true"></i> Address: 1140 N. Hemlock Rd.</p>
        <p><i class="fas fa-user" aria-hidden="true"></i> Library Director: BillieJo Bluemer</p>
        <p><i class="fas fa-envelope" aria-hidden="true"></i> Email: library@rauchholzlibrary.org</p>
        <p><i class="fas fa-phone-square" aria-hidden="true"></i> Phone: (989) 642-8621</p>
        <p><i class="fas fa-fax" aria-hidden="true"></i> Fax: (989) 642-5559</p>
        <hr>
        <div class="row">
          <h2>Hours</h2>
          <p></p>
          <table class="table table-hover">
            <tbody>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>9:00am-5:00pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9:00am-5:00pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>1:00pm-8:00pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>1:00pm-8:00pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9:00am-5:00pm</td>
            </tr>
            <tr>
              <td>Saturday <i>(September-May)</i></td>
              <td>9:00am-1:00pm</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ContactUs.vue'
}
</script>

<style scoped>
button{
  outline-color: #FFFFFF;
}

a {
  color: #FFFFFF;
}

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

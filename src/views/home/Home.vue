<template>
  <div id="carousel">
    <div id="carouselIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <ol class="carousel-indicators" style="text-align: center">
        <li data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselIndicators" data-bs-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" style="align-content: center">
        <div class="carousel-item active">
          <img src="../home/carousel_images/car-image1.png" class="d-block w-100 align-items-center" alt="pic1">
        </div>
        <div class="carousel-item">
          <img src="../home/carousel_images/car-image2.png" class="d-block w-100" alt="Pic2">
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>

  <div class="container marketing">

    <div class="catalog-search">
      <form action="https://rauchholzlibrary.biblionix.com/" target="_blank">
        <div class="form-group">
          <h1 class="text-center" for="InputTitle">Catalog Search</h1>
          <input type="text" class="form-control" name="search" placeholder="Enter Your Search Here!">
        </div>
        <div id="catalog-button">
          <button type="submit" class="btn btn-primary btn-center">Submit</button>
        </div>
      </form>
    </div>

    <hr>

    <div class="container" style="padding-top: 2em">
      <div class="row">
        <div class="col featurette">
          <img class="featurette-image" src="../home/featurette_images/feature1.png">
        </div>
        <div class="col featurette">
          <h2 class="featurette-heading">First featurette headling. <span class="muted">It'll blow your mind.</span>
          </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
            semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.</p>
        </div>
      </div>

      <hr class="featurette-break">

      <div class="row featurette">
        <div class="col">
          <h2 class="featurette-heading">Second featurette headling.
            <span class="muted">It'll blow your mind.</span>
          </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
            semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.</p>
        </div>
        <div class="col">
          <img class="featurette-image" src="../home/featurette_images/feature2.png">
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
hr {
  margin: 2em;
}

.featurette-break{
  visibility: hidden;
}

.carousel-inner img {
  width: auto;
  height: 420px;
  object-fit: contain;

}

.catalog-search {
  padding-top: 1em;
}

#catalog-button {
  padding-top: 1em;
}

.featurette-image {
  height: 350px;
  width: 350px;
}

.featurette {
  align-items: center;
  margin: auto;

}
</style>

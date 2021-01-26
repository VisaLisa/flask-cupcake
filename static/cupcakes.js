<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Cupcakes</title>
</head>
<body>
    <h1>Cupcake List</h1>

    <ul id="cupcakes-list"></ul>

    <h2>Add a new cupcake!</h2>

    <form id="new-cupcake-form">
  <div>
    <label for="form-flavor">Flavor: </label>
    <input name="flavor" id="form-flavor">
  </div>

  <div>
    <label for="form-size">Size: </label>
    <input name="size" id="form-size">
  </div>

  <div>
    <label for="form-rating">Rating: </label>
    <input type="number" name="rating" id="form-rating">
  </div>

  <div>
    <label for="form-image">Image: </label>
    <input name="image" id="form-image">
  </div>

  <button>Add!</button>
</form>

<script src="st"></script>
<script src="https://unpkg.com/axios/dist/axios.js"></script>
<script src="/static/cupcakes.js"></script>

</body>
</html>
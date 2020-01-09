<template>
  <div>
      <div class="search-sidebar">
         <div class="search-container">
                <div class="panel is-link">
                    <p class="panel-heading">
                    Link
                </p>
                </div>
              <div class="panel-block">
                 <p class="control has-icons-left">
                <input class="input is-link" type="text" placeholder="Search">
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
         </div>
      </div>
  </div>
</template>

<style scoped>
.search-sidebar{
    width: 100%;
    margin: 1em 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    border-image: initial;
    border-radius: 0.6em;
}
.search-container{
    padding: 10px 14px;
}
</style>
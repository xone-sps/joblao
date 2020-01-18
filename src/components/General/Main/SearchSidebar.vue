<template>
  <div>
      <div class="search-sidebar">
         <div class="search-container">
                    <p>ຄົ້ນຫາຫຼັກສູດ</p>
              <div class="panel-block">
                 <p class="control has-icons-right">
                <input class="input is-link" type="text" placeholder="Search">
                <span class="icon is-right">
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
.control.has-icons-right .icon:hover{
cursor: pointer;
}
.control.has-icons-right .icon:hover{
background: red;
}

.control.has-icons-left .icon, .control.has-icons-right .icon{
    color: #fe6d43 !important;
    cursor: pointer;
}
</style>
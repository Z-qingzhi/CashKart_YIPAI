<template>
  <div>
      <button @click="add($event,item.id)" :rel="item.id" v-for="(item,index) in list">Add {{item.id}}</button>
      <ul>
        <li :is="item.component" :text="item.text" :message="item.rel" v-for="item in items" v-show="itemState==item.rel"></li>
      </ul>
  </div>
</template>
<script>
  import Footer from '../components/Footer'
  var vum = {
    created:function(){
      
    },
    data: () => ({
      items: [{
          'component': 'Footer',
          'text': 1,
          'rel':1,
        }],
      itemState:1,
      list:[{
        id:1,
      },
      {
        id:2,
      },
      {
        id:3,
      },
      {
        id:1,
      }]
    }),
    components: {
      Footer
    },
    methods:{
       add(ev,rel) {
         if (this.itemState != ev.currentTarget.getAttribute("rel")) {
                 this.itemState = ev.currentTarget.getAttribute("rel");
                 var rel = this.itemState; 
             }
          for(var i in this.items){
            if(this.items[i].rel==rel){
              return;
            }
          }
          this.items.push({
            'component': 'Footer',
            'text': rel,
            'rel':rel,
          })
      }

    }
  }
  export default vum;



</script>
<style lang="scss" scoped>
    
</style>
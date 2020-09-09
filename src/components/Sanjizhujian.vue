<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-09 19:40:00
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-09 20:06:09
-->
<template>
  <div>
      <ul>
         
          <li v-for="(item,index) in list" :key="index">
              <h4 @click="item.flag=!item.flag">
                  <span>{{item.num+index}}</span><span>{{item.name}}</span>
              </h4>
              <ol>
                  <li v-for="(i,j) in list.length&&list[index].child" :key="j" :style="{display:item.flag?'block':'none'}" >
                        <h5 @click="i.show=!i.show">
                            <span>{{i.id+j}}</span><span>{{i.title}}</span>
                        </h5>
                        <ol>
                            <li v-for="(m,n) in  list[index].child.length&&list[index].child[j].children" :key="n" :style="{display:i.show?'block':'none'}">
                                <h6>
                                     <span>{{m.nfc+n}}</span><span>{{m.name}}</span>
                                </h6>
                            </li>
                        </ol>
                  </li>
              </ol>
          </li>
      </ul>

  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
      return {
          list:[]
      }  
    },
    created(){
        Axios.get('/api/list').then(res => {
            this.list = res.data.list
            console.log(this.list)
        })
    }
}
</script>

<style>
*{
    list-style: none;
}
</style>
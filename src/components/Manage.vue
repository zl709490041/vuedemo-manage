<template>
    <div class="administrate">
      <button class="add common" v-on:click="show">新增</button>
      <div class="input-area clearfix" v-show="isShow">
        <input type="text" placeholder="请输入人员姓名" v-model="message">
        <button class="common" v-on:click="addName">确定</button>
      </div>
      <table>
        <tr>
          <th>姓名</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in items">
          <td>{{item}}</td>
          <td v-bind:id="index"><span v-on:click="edit">编辑</span> <span v-on:click="items.splice(index,1)">删除</span></td>
        </tr>
      </table>
      <div class="wrap" v-show="showEdit">
        <div class="content">
          <input type="text" placeholder="请输入新姓名" v-model="newName">
          <button class="common" v-on:click="cancel">取消</button>
          <button class="common" v-on:click="editName">确定</button>
        </div>
      </div>
    </div>
</template>
<style>
  .clearfix:after
  {
    content:'.';
    display: block;
    height:0;
    clear:both;
    visibility: hidden;
  }
  .clearfix
  {
    zoom:1;
  }
  .administrate{
    width:100%;
  }
  .add{
    width:60%;
    margin-bottom: 20px;
  }
  .common{
    height:40px;
    background-color: #42b983;
    border-radius:6px;
    line-height: 40px;
    font-size: 16px;
    color: #ffffff;
    border:0;
  }
  table{
    width:100%;
  }
  table td,table th{
    width:50%;
  }
  .input-area{
    width:80%;
    margin-bottom:20px;
    display: inline-block;
  }
  .input-area button{
    width:25%;
    float: right;
  }
  .input-area input{
    width:73%;
    height:40px;
    border:1px solid #000000;
    float:left;
  }
  .wrap{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background-color: #000000;
    opacity: 0.8;
  }
  .content{
    width:60%;
    height:100px;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-30%;
    margin-top:-50px;
  }
  .content input{
    width:100%;
    height:40px;
    margin-bottom:10px;
  }
  .content button{
    width: 45%;
    margin-right:2px;
  }
</style>
<script>
    export default{
      data(){
        return {
          items: ['Jack', 'Joe'],
          message: '',
          newName: '',
          isShow: false,
          showEdit: false,
          editId: 0
        }
      },
      methods: {
        addName(){
          this.items.push(this.message);
          this.message = ''
        },
        show(){
          this.isShow = true
        },
        edit(e){
          var id = e.target.offsetParent.id
          this.showEdit = true
          this.editId = id
          this.newName = this.items[this.editId]
        },
        cancel(){
          this.showEdit = false
        },
        editName(){
          this.showEdit = false
          this.items[this.editId] = this.newName
          this.newName = ''
        }
      }
    }
</script>

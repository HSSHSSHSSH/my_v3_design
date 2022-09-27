# my_design

## Error

### “Preprocessor dependency "sass" not found. Did you install it?”
```
npm install -g sass 
npm add -D sass

npm install
npm run dev
```

## tip
### use触发install方法
### 发布npm  package.json中的private必须为false

##双向绑定
传入的参数名为modelValue 
在组件中改变modelValue时用 update:modelValue时间
```
<h-input :modelValue="value" />
```
组件内
```
<input :value=modelValue @input="emit('update:modelValue,value')"/>
```
tip: 父组件传参有v-model :modelValue="val"时,子组件modelValue为v-model的数据
## selector组件
    label元素： 点击label元素 触发 id 与label for属性相同的元素


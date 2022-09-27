<template>
  <div>demo</div>
</template>

<script>
export default {
    name: 'hDemo',
    props: {
        val: String
    },
    mounted() {
        console.log('val',this);
    }
}
</script>

<style>

</style>
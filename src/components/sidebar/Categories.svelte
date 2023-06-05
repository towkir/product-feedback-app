<script>
    import {categories} from "@/store/store.js";
</script>

<div class="tag-list">
    <span class="tag active">All</span>
    {#each $categories as category}
        <span class="tag">{category}</span>
    {/each}
</div>

<style lang="stylus">
  .tag-list
    background-color brand-white
    padding 24px
    padding-bottom 10px
    margin-bottom 24px
    border-radius 10px
</style>

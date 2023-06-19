<script>
    import {createEventDispatcher} from "svelte";
    import {categories} from "@/store/store.js";
    const allCategories = ['All', ...$categories];
    export let selectedCategory = 'All';
    const dispatch = createEventDispatcher();
    function chooseCategory(val) {
        dispatch('categorySelection', val)
    }
</script>

<div class="tag-list">
    {#each allCategories as category}
        <span
            class="tag" class:active="{selectedCategory === category}"
            on:click={() => chooseCategory(category)}
        >
            {category}
        </span>
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

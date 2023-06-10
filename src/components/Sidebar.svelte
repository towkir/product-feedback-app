<script>
    import ProductBanner from "@/components/sidebar/ProductBanner.svelte";
    import Categories from "@/components/sidebar/Categories.svelte";
    import Roadmap from "@/components/sidebar/Roadmap.svelte";
    export let selectedCategory;
</script>

<div class="sidebar-wrapper">
    <ProductBanner/>
    <Categories selectedCategory="{selectedCategory}" on:categorySelection />
    <Roadmap />
</div>

<style lang="stylus">
  .sidebar-wrapper
    max-width 255px
</style>

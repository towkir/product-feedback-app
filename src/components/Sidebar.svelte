<script>
    import ProductBanner from "@/components/sidebar/ProductBanner.svelte";
    import Categories from "@/components/sidebar/Categories.svelte";
</script>

<div class="sidebar-wrapper">
    <ProductBanner/>
    <Categories />
</div>

<style lang="stylus">
  .sidebar-wrapper
    max-width 255px
</style>

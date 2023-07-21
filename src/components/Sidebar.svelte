<script>
    import ProductBanner from "@/components/sidebar/ProductBanner.svelte";
    import Categories from "@/components/sidebar/Categories.svelte";
    import Roadmap from "@/components/sidebar/Roadmap.svelte";
    export let selectedCategory;
</script>

<div class="sidebar-wrapper">
    <ProductBanner/>
    <div class="drawer">
        <Categories selectedCategory="{selectedCategory}" on:categorySelection />
        <Roadmap />
    </div>
</div>

<style lang="stylus">
  .sidebar-wrapper
    width 100%
    max-width 255px
    .drawer
      display contents
  @media screen and (max-width: 991px)
    .sidebar-wrapper
      display flex
      gap 10px
      align-items stretch
      max-width unset
      :global(.product-banner),
      :global(.tag-list),
      :global(.roadmap-wrapper)
        flex 1 1 0
  @media screen and (max-width: 690px)
    .sidebar-wrapper
      display block
      .drawer
        display block
        position fixed
        right 100%
        top 0
</style>

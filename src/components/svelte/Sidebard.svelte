<script lang="ts">
  import { Header, Divider, Group, Button } from "@svelteuidev/core";
  import { isSidebarOpen } from "src/stores/SidebarStore";
  let open = $isSidebarOpen;

  $: open = !$isSidebarOpen;
</script>

<Header
  height="100svh"
  slot="header"
  bind:hidden={open}
  id="sidebar"
  class="flex !fixed !top-64 left-0"
>
  <Group direction="column" spacing="xs">
    <Button variant="outline">1</Button>
    <Button variant="outline">2</Button>
    <Button variant="outline">3</Button>
  </Group>
  <Divider orientation="vertical" />
</Header>

<style>
</style>

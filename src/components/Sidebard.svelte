<script lang="ts" type="module">
    import Drawer, { Content, Header, Title, Subtitle } from "@smui/drawer";
    import List, { Item, Text } from "@smui/list";
    import { isSidebarOpen } from "../stores/SidebarStore";
    let active = "Gray Kittens";
    let open = $isSidebarOpen;
    
    $: open = $isSidebarOpen

    function setActive(value: string) {
        active = value;
    }
</script>

<section>
    <Drawer variant="dismissible" bind:open id="sidebar">
        <Header>
            <Title>Super Drawer</Title>
            <Subtitle>It's the best drawer.</Subtitle>
        </Header>
        <Content>
            <List>
                <Item
                    href="javascript:void(0)"
                    on:click={() => setActive("Gray Kittens")}
                    activated={active === "Gray Kittens"}
                >
                    <Text>Gray Kittens</Text>
                </Item>
                <Item
                    href="javascript:void(0)"
                    on:click={() => setActive("A Space Rocket")}
                    activated={active === "A Space Rocket"}
                >
                    <Text>A Space Rocket</Text>
                </Item>
                <Item
                    href="javascript:void(0)"
                    on:click={() => setActive("100 Pounds of Gravel")}
                    activated={active === "100 Pounds of Gravel"}
                >
                    <Text>100 Pounds of Gravel</Text>
                </Item>
                <Item
                    href="javascript:void(0)"
                    on:click={() => setActive("All of the Shrimp")}
                    activated={active === "All of the Shrimp"}
                >
                    <Text>All of the Shrimp</Text>
                </Item>
                <Item
                    href="javascript:void(0)"
                    on:click={() => setActive("A Planet with a Mall")}
                    activated={active === "A Planet with a Mall"}
                >
                    <Text>A Planet with a Mall</Text>
                </Item>
            </List>
        </Content>
    </Drawer>
</section>

<style>
    * :global(#sidebar) {
        position: sticky;
        top: 50px;
        left: 0;
        max-height: calc(100vh - var(--navbar-height));
    }
</style>

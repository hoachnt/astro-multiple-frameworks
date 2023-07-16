import { useStore } from '@nanostores/react';
import { isSimsData } from '../stores/TableStore';
import { Button } from '@mui/material';
import axios from 'axios';

export default function ButtonReact() {
    const $isSimsData = useStore(isSimsData)

    async function fetchSim() {
        const response = await axios(
            "https://directus.hoach.skryonline.com/items/sim_list", {
            params: {
                page: 2,
                limigt: 100
            }
        }
        )
        isSimsData.set(response.data.data)
    }

    return (
        <Button onClick={fetchSim}>Load more</Button>
    )
}
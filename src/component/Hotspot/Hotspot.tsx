import React from 'react';
import { Button } from 'antd';

import { ImageInfo, HotspotInfo } from '../interface';
import HotspotModal from './HotspotModal';

interface HotspotProps {
    imgs: ImageInfo[];
    hotspots?: HotspotInfo[];
    onChange: (hotspots: HotspotInfo[]) => void;
}

interface HotspotState {
    isModalVisible: boolean;
}

class Hotspot extends React.Component<HotspotProps, HotspotState> {
    constructor(props: HotspotProps) {
        super(props);
        this.state = {
            isModalVisible: false,
        };
    }

    closeModal = () => {
        this.setState({
            isModalVisible: false,
        });
    }

    renderModal = (isModalVisible: boolean) => {
        const { imgs, hotspots, onChange } = this.props;
        return (isModalVisible ?
            <HotspotModal
                imgs={imgs}
                isModalVisible={isModalVisible}
                hotspots={hotspots}
                onCancel={this.closeModal}
                onOk={(hotspots: HotspotInfo[]) => { onChange(hotspots); this.closeModal(); }}
            /> : null
        );
    }

    openModal = () => {
        this.setState({
            isModalVisible: true,
        });
    }

    render() {
        const { isModalVisible } = this.state;
        return (
            <div>
                <Button onClick={this.openModal}>图片热区</Button>
                {this.renderModal(isModalVisible)}
            </div >
        );
    }
}

export default Hotspot;
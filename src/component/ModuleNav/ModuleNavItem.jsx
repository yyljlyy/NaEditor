import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { showConfig, focusModule, removeModuleRequest } from '../../actions';

// export interface ModuleNavItemProps {
//     showConfig?: any;
//     moduleData?: any;
//     moduleConfig?: any;
//     focusModule?: (moduleId: number) => void;
//     removeModuleRequest?: (args: any) => void;
// }

class ModuleNavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            moduleData,
            moduleConfig: {
                isVisiable: isConfigVisiable,
            },
            moduleData: {
                moduleName,
                moduleId,
                tempData: {
                    isActive,
                },
            },
            showConfig,
            focusModule,
            removeModuleRequest,
        } = this.props;

        const pageId = Number.parseInt((window).BASE_DATA.pageId, 10);

        return (
            <li
                className={`d-module-nav-item ${isActive ? 'active' : ''}`}
                onClick={(e) => { focusModule(moduleId); if (isConfigVisiable) { showConfig(moduleData); } }}
            >
                <span className="d-module-name">{moduleName}</span>
                <span className="d-module-operate">
                    <Icon
                        className="d-operate-icon"
                        type="setting"
                        onClick={(e) => { showConfig(moduleData); }}
                    />
                    <Icon
                        className="d-operate-icon"
                        type="delete"
                        onClick={(e) => { removeModuleRequest({ moduleId, pageId }); }}
                    />
                </span>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        module: state.module,
        moduleConfig: state.moduleConfig,
    };
};

export default connect(mapStateToProps, {
    showConfig,
    focusModule,
    removeModuleRequest,
})(ModuleNavItem);
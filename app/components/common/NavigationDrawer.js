import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'native-base';

import SideBarMenu from './SideBarMenu';

class NavigationDrawer extends Component {

    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);

    }

    getChildContext() {
        return {
            openDrawer: this.openDrawer,
            closeDrawer: this.closeDrawer
        };
    }


    openDrawer = () => {
        this._drawer._root.open();
    };

    closeDrawer = () => {
        this._drawer._root.close();
    };

    render() {

        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<SideBarMenu/> }
                tapToClose={true}
                onClose={this.closeDrawer}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                styles={{
                    drawer: {
                        shadowColor: '#000000',
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                    },
                }}
                tweenHandler={(ratio) => ({
                    main: {opacity: (2 - ratio) / 2}
                })}
                negotiatePan={true}>

                {this.props.children}

            </Drawer>
        );
    }

}

NavigationDrawer.childContextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
};

export default NavigationDrawer
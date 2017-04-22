import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function renderInput(props) {
    const {input, meta, ...inputProps} = props;

    return (
        <View>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
            />
            <View>
                {
                    meta.touched && meta.error ?
                        <Text style={styles.red}>{meta.error}</Text>
                        : null
                }
            </View>
        </View>

    );
}

renderInput.propTypes = {
    input: PropTypes.shape({
        onBlur: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func.isRequired,
        value: PropTypes.any.isRequired
    }).isRequired,
    meta: PropTypes.shape({
        active: PropTypes.bool.isRequired,
        error: PropTypes.string,
        invalid: PropTypes.bool.isRequired,
        pristine: PropTypes.bool.isRequired,
        visited: PropTypes.bool.isRequired
    }).isRequired
};

const styles = StyleSheet.create({
    red: {
        color: "#F55E64",
    }
});
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

// Register the block variation
registerBlockVariation( 'core/button', {
	name: 'raptorize-button',
	title: __( 'Raptorize Button', 'raptorize-it' ),
	description: __( 'A button that triggers the raptor effect', 'raptorize-it' ),
	icon: 'welcome-view-site',
	attributes: {
		className: 'is-style-raptorize',
		isRaptorizeButton: true,
	},
} );

// Add custom attribute to button block
function addRaptorizeAttribute( settings, name ) {
	if ( name !== 'core/button' ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			isRaptorizeButton: {
				type: 'boolean',
				default: false,
			},
		},
	};
}

addFilter(
	'blocks.registerBlockType',
	'raptorize/button-attribute',
	addRaptorizeAttribute
);

// Add controls to button block
const withRaptorizeControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/button' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { isRaptorizeButton } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Raptorize Settings', 'raptorize-it' ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ __( 'Raptorize Button', 'raptorize-it' ) }
							help={ __(
								'Make this button trigger a raptor',
								'raptorize-it'
							) }
							checked={ isRaptorizeButton }
							onChange={ ( value ) => {
								setAttributes( {
									isRaptorizeButton: value,
									className: value
										? 'is-style-raptorize'
										: '',
								} );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withRaptorizeControls' );

addFilter(
	'editor.BlockEdit',
	'raptorize/with-raptorize-controls',
	withRaptorizeControls
);

// Add custom class to block wrapper
function addRaptorizeClass( props, blockType, attributes ) {
	if ( blockType.name !== 'core/button' ) {
		return props;
	}

	if ( attributes.isRaptorizeButton ) {
		return {
			...props,
			className: `${ props.className || '' } raptorize-button`.trim(),
		};
	}

	return props;
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'raptorize/add-raptorize-class',
	addRaptorizeClass
);

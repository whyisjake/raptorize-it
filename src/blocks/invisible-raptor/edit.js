import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { enableKonamiCode, enableTimer, timerDelay } = attributes;
	const blockProps = useBlockProps( {
		className: 'raptorize-invisible-block',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Raptor Settings', 'raptorize-it' ) }>
					<ToggleControl
						label={ __( 'Enable Konami Code', 'raptorize-it' ) }
						help={ __( 'Trigger raptor with ↑ ↑ ↓ ↓ ← → ← → B A', 'raptorize-it' ) }
						checked={ enableKonamiCode }
						onChange={ ( value ) =>
							setAttributes( { enableKonamiCode: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Enable Timer', 'raptorize-it' ) }
						help={ __( 'Automatically trigger after page load', 'raptorize-it' ) }
						checked={ enableTimer }
						onChange={ ( value ) =>
							setAttributes( { enableTimer: value } )
						}
					/>
					{ enableTimer && (
						<RangeControl
							label={ __( 'Timer Delay (ms)', 'raptorize-it' ) }
							value={ timerDelay }
							onChange={ ( value ) =>
								setAttributes( { timerDelay: value } )
							}
							min={ 1000 }
							max={ 30000 }
							step={ 1000 }
						/>
					) }
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="raptorize-invisible-block__content">
					<h3>{ __( 'Raptor Enabled', 'raptorize-it' ) }</h3>
					<p>
						{ enableKonamiCode &&
							__( '✓ Konami Code active', 'raptorize-it' ) }
					</p>
					{ enableTimer && (
						<p>
							{ __(
								`✓ Timer active (${
									timerDelay / 1000
								}s delay)`,
								'raptorize-it'
							) }
						</p>
					) }
					{ ! enableKonamiCode && ! enableTimer && (
						<p className="raptorize-warning">
							{ __(
								'⚠ No trigger enabled',
								'raptorize-it'
							) }
						</p>
					) }
				</div>
			</div>
		</>
	);
}

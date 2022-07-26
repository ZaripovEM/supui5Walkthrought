;<mvc:View
	controllerName='sap.ui.demo.walkthrough.controller.App'
	xmlns='sap.m'
	xmlns:mvc='sap.ui.core.mvc'
	displayBlock='true'
>
	<App>
		<pages>
			<Page title='{i18n>homePageTitle}'>
				<content>
					<Panel headerText='{i18n>helloPanelTitle}'>
						<content>
							<Button text='{i18n>showHelloButtonText}' press='.onShowHello' />
							<Input
								value='{/recipient/name}'
								description='Hello {/recipient/name}'
								valueLiveUpdate='true'
								width='60%'
							/>
						</content>
						<footer>
							<toolbar>
								<ToolbarSpacer />
								<Button
									text='{i18n>showHelloButtonText}'
									press='.onShowHello'
								/>
								<ToolbarSeparator />
								<Button
									text='{i18n>showHelloButtonText}'
									press='.onShowHello'
								/>
							</toolbar>
						</footer>
					</Panel>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>

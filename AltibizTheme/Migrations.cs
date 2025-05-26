using OrchardCore.ContentFields.Settings;
using OrchardCore.ContentManagement.Metadata;
using OrchardCore.ContentManagement.Metadata.Settings;
using OrchardCore.Data.Migration;
using OrchardCore.Media.Settings;
using OrchardCore.Recipes.Services;

namespace AltibizTheme
{
	public class Migrations : DataMigration
	{

		private readonly IContentDefinitionManager _contentDefinitionManager;
		private readonly IRecipeMigrator _recipeMigrator;

		public Migrations(IContentDefinitionManager contentDefinitionManager, IRecipeMigrator recipeMigrator)
		{

			_contentDefinitionManager = contentDefinitionManager;
			_recipeMigrator = recipeMigrator;
		}

		public int Create()
		{
			return 1;
		}

		public async Task<int> UpdateFrom1()
		{
			await _contentDefinitionManager.AlterPartDefinitionAsync("Service", part => part
				.WithField("IconClass", field => field
					.OfType("TextField")
					.WithDisplayName("Image Path or Icon Class")
					.WithPosition("0")
					.WithSettings(new TextFieldSettings
					{
						Hint = "Image path or the icon css class from font-awesome. e.g., fa-laptop, fa-shopping-cart, fa-lock",
					})
				)
			);
			return 2;
		}
        public async Task<int> UpdateFrom2()
        {
            await _recipeMigrator.ExecuteAsync("BlogRecipe.json", this);
            return 3;
        }
        public async Task<int> UpdateFrom3()
        {
            await _recipeMigrator.ExecuteAsync("MediaProfiles.json", this);
            return 4;
        }
        public async Task<int> UpdateFrom4()
        {
            await _recipeMigrator.ExecuteAsync("HeaderWidget.json", this);
            return 5;
        }
		public async Task<int> UpdateFrom5()
		{
            await _recipeMigrator.ExecuteAsync("BlogPost-update.json", this);
            return 6;
        }	
    }
}

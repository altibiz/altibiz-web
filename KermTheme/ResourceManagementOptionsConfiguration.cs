using Microsoft.Extensions.Options;
using OrchardCore.ResourceManagement;

namespace KermTheme;

public sealed class ResourceManagementOptionsConfiguration : IConfigureOptions<ResourceManagementOptions>
{
    private static readonly ResourceManifest _manifest;

    static ResourceManagementOptionsConfiguration()
    {
        _manifest = new ResourceManifest();

        _manifest
            .DefineScript("kermtheme-bootstrap-bundle")
            .SetCdn("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.js")
            .SetCdnIntegrity("sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p", "sha384-8fq7CZc5BnER+jVlJI2Jafpbn4A9320TKhNJfYP33nneHep7sUg/OD30x7fK09pS")
            .SetVersion("5.1.3");

        _manifest
            .DefineScript("KermTheme")
            .SetUrl("~/KermTheme/js/scripts.min.js", "~/KermTheme/js/scripts.js")
            .SetVersion("7.0.10");

        _manifest
            .DefineStyle("KermTheme")
            .SetUrl("~/KermTheme/css/styles.min.css", "~/KermTheme/css/styles.css")
            .SetVersion("7.0.10");

        _manifest
            .DefineStyle("kermtheme-bootstrap-oc")
            .SetDependencies("KermTheme")
            .SetUrl("~/KermTheme/css/bootstrap-oc.min.css", "~/KermTheme/css/bootstrap-oc.css")
            .SetVersion("1.0.0");
    }

    public void Configure(ResourceManagementOptions options)
    {
        options.ResourceManifests.Add(_manifest);
    }
}

# Blazor GetProperty Script [![NuGet Package](https://img.shields.io/nuget/v/Toolbelt.Blazor.GetProperty.Script.svg)](https://www.nuget.org/packages/Toolbelt.Blazor.GetProperty.Script/)

## Summary

Once you've installed this NuGet package to your Blazor application,

```shell
dotnet add package Toolbelt.Blazor.GetProperty.Script
```

you can use the **`Toolbelt.Blazor.getProperty`** global JavaScript function in your Blazor application.  The **`Toolbelt.Blazor.getProperty`** allows you to retrieve any global property values specified by dot-separated property path string without any additional installations and configurations, like below.

```razor
@inject IJSRuntime JSRuntime

@code
{
  protected override async Task OnAfterRenderAsync(bool firstRender)
  {
    if (firstRender)
    {
      var onLine = await JSRuntime.InvokeAsync<bool>("Toolbelt.Blazor.getProperty", "navigator.onLine");
    }
  }
}
```

## Release Note

[Release notes](https://github.com/jsakamoto/Toolbelt.Blazor.GetProperty.Script/blob/main/RELEASE-NOTES.txt)

## License

[Mozilla Public License Version 2.0](https://github.com/jsakamoto/Toolbelt.Blazor.GetProperty.Script/blob/main/LICENSE)

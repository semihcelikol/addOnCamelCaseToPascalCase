# Firefox Add-On Converter tool || Camel case to pascal case or Pascal case to camel case

# ConvertToPascalCase
Camel case class name/property convert to Pascal Case: https://addons.mozilla.org/tr/firefox/addon/convertingtool/

# Example Camel case to pascal case

<h3>Camel case data;</h3>

```

public class testData
{
   public string name { get; set; }
   public string surName { get; set; }
}

public class testData2
{
   public string name2 { get; set; }
   public string surName2 { get; set; }
}
```

<h3>Convert to Pascal Case;</h3>

```

public class TestData
{
   public string Name { get; set; }
   public string SurName { get; set; }
}

public class TestData2
{
   public string Name2 { get; set; }
   public string SurName2 { get; set; }
}
```

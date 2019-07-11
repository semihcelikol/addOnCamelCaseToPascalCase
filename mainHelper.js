document.addEventListener("click", function(e)
{
    if (e.target.name == "convertPascalCase")
    {
        var data = document.getElementById('dataCamelCase').value;

        var notChangeStrArray = new Array ("class",
                                            "void",
                                            "public",
                                            "private",
                                            "internal",
                                            "interface",
                                            "const",
                                            "abstract",
                                            "string",
                                            "string?",
                                            "int",
                                            "int?",
                                            "bool",
                                            "bool?",
                                            "boolean",
                                            "float",
                                            "float?",
                                            "decimal",
                                            "decimal?",
                                            "byte",
                                            "byte?",
                                            "{",
                                            "}",
                                            "get;",
                                            "set;");
            
        var splitData = data.split(" ");
        var counter = 0;
        var result = "";

        for(var i=0; i< splitData.length; i++) 
        {
            var item = splitData[i];
            var ret = notChangeStrArray.indexOf(item);
            
            if(ret >= 0)
            {
                if (counter <= splitData.length)
                {
                    //first parentheses \n
                    //public class testClass \n {
                    if (item == "{"
                        && splitData[counter + 1] != "get;")
                    {
                        result += "\n";
                        result += item + "\n";

                        //6 char space
                        result += "      ";
                    }
                    else
                    {
                        result += item + " ";
                    }

                    if (counter > 0)
                    {
                        //public string Name { get; set; } \n
                        if (splitData[counter - 1] == "set;")
                        {
                            result += "\n";

                            //if not the last parentheses
                            if (splitData[counter + 1] != "}")
                            {
                                //6 char space
                                result += "      ";
                            }
                        }
                        else
                        {
                            if (item == "}")
                            {
                                result += "\n";
                            }
                        }
                    }
                }
            }
            else
            {
                result += item.substring(0, 1).toUpperCase();
                result += item.substring(1) + " ";
            }

            counter++;
        }

        document.getElementById('dataPascalCase').value = result;
    }
});
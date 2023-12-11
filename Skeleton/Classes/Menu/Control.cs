namespace SZORPClasses.Classes.Menu;

public class Control
{
    public enum ControlType
    {
        button,
        slider,
        text
    }

    private ControlType _type;

    private float _value;

    public void ChangeValue(float newValue) { }

}
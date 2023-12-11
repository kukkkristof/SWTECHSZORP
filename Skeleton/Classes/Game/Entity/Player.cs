namespace SZORPClasses.Classes.Game.Entity;

public class Player : Entity
{

    public int Level;
    public int Thirst;
    public int Hunger;

    private void Move() { }
    // Move the player according to user input


    public override Item.Item[] TakeDamage() { return null ;}

    public override void PassTime(float time) { }
}
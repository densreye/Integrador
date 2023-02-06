using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RubricasAPI.Migrations
{
    /// <inheritdoc />
    public partial class nivelesUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Niveles_Rutasdemedicion_RutasId",
                table: "Niveles");

            migrationBuilder.RenameColumn(
                name: "docente",
                table: "Niveles",
                newName: "Docente");

            migrationBuilder.AlterColumn<int>(
                name: "RutasId",
                table: "Niveles",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Niveles_Rutasdemedicion_RutasId",
                table: "Niveles",
                column: "RutasId",
                principalTable: "Rutasdemedicion",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Niveles_Rutasdemedicion_RutasId",
                table: "Niveles");

            migrationBuilder.RenameColumn(
                name: "Docente",
                table: "Niveles",
                newName: "docente");

            migrationBuilder.AlterColumn<int>(
                name: "RutasId",
                table: "Niveles",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Niveles_Rutasdemedicion_RutasId",
                table: "Niveles",
                column: "RutasId",
                principalTable: "Rutasdemedicion",
                principalColumn: "Id");
        }
    }
}

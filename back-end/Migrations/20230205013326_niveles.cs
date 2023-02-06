using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RubricasAPI.Migrations
{
    /// <inheritdoc />
    public partial class niveles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodigoMateria",
                table: "Rutasdemedicion");

            migrationBuilder.DropColumn(
                name: "DescripcionEspanol",
                table: "Rutasdemedicion");

            migrationBuilder.DropColumn(
                name: "DescripcionIngles",
                table: "Rutasdemedicion");

            migrationBuilder.DropColumn(
                name: "IdCurso",
                table: "Rutasdemedicion");

            migrationBuilder.RenameColumn(
                name: "Paralelo",
                table: "Rutasdemedicion",
                newName: "nombrerub_ingles");

            migrationBuilder.RenameColumn(
                name: "Medicion",
                table: "Rutasdemedicion",
                newName: "nombrerub_espanol");

            migrationBuilder.RenameColumn(
                name: "Materia",
                table: "Rutasdemedicion",
                newName: "Carrera");

            migrationBuilder.RenameColumn(
                name: "IdMateria",
                table: "Rutasdemedicion",
                newName: "IdRubrica");

            migrationBuilder.CreateTable(
                name: "Niveles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nivel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Materia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdMateria = table.Column<int>(type: "int", nullable: false),
                    CodMateria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Paralelo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdCurso = table.Column<int>(type: "int", nullable: false),
                    docente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RutasId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Niveles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Niveles_Rutasdemedicion_RutasId",
                        column: x => x.RutasId,
                        principalTable: "Rutasdemedicion",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Niveles_RutasId",
                table: "Niveles",
                column: "RutasId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Niveles");

            migrationBuilder.RenameColumn(
                name: "nombrerub_ingles",
                table: "Rutasdemedicion",
                newName: "Paralelo");

            migrationBuilder.RenameColumn(
                name: "nombrerub_espanol",
                table: "Rutasdemedicion",
                newName: "Medicion");

            migrationBuilder.RenameColumn(
                name: "IdRubrica",
                table: "Rutasdemedicion",
                newName: "IdMateria");

            migrationBuilder.RenameColumn(
                name: "Carrera",
                table: "Rutasdemedicion",
                newName: "Materia");

            migrationBuilder.AddColumn<string>(
                name: "CodigoMateria",
                table: "Rutasdemedicion",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DescripcionEspanol",
                table: "Rutasdemedicion",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DescripcionIngles",
                table: "Rutasdemedicion",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdCurso",
                table: "Rutasdemedicion",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

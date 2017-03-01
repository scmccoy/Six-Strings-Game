require 'rails_helper'

RSpec.describe "puzzles/new", type: :view do
  before(:each) do
    assign(:puzzle, Puzzle.new(
      :words => "MyString",
      :clues => "MyString"
    ))
  end

  it "renders new puzzle form" do
    render

    assert_select "form[action=?][method=?]", puzzles_path, "post" do

      assert_select "input#puzzle_words[name=?]", "puzzle[words]"

      assert_select "input#puzzle_clues[name=?]", "puzzle[clues]"
    end
  end
end

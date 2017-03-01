require 'rails_helper'

RSpec.describe "puzzles/edit", type: :view do
  before(:each) do
    @puzzle = assign(:puzzle, Puzzle.create!(
      :words => "MyString",
      :clues => "MyString"
    ))
  end

  it "renders the edit puzzle form" do
    render

    assert_select "form[action=?][method=?]", puzzle_path(@puzzle), "post" do

      assert_select "input#puzzle_words[name=?]", "puzzle[words]"

      assert_select "input#puzzle_clues[name=?]", "puzzle[clues]"
    end
  end
end

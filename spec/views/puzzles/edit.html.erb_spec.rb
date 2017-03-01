require 'rails_helper'

RSpec.describe "puzzles/edit", type: :view do
  before(:each) do
    @puzzle = assign(:puzzle, Puzzle.create!(
      :word1 => "MyString",
      :word2 => "MyString",
      :word3 => "MyString",
      :word4 => "MyString",
      :word5 => "MyString",
      :word6 => "MyString"
    ))
  end

  it "renders the edit puzzle form" do
    render

    assert_select "form[action=?][method=?]", puzzle_path(@puzzle), "post" do

      assert_select "input#puzzle_word1[name=?]", "puzzle[word1]"

      assert_select "input#puzzle_word2[name=?]", "puzzle[word2]"

      assert_select "input#puzzle_word3[name=?]", "puzzle[word3]"

      assert_select "input#puzzle_word4[name=?]", "puzzle[word4]"

      assert_select "input#puzzle_word5[name=?]", "puzzle[word5]"

      assert_select "input#puzzle_word6[name=?]", "puzzle[word6]"
    end
  end
end
